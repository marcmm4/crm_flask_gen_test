'''
from app.users import blueprint
from flask import render_template
from flask_login import login_required
'''
import app.tasks

from flask_login import (
    login_required,
)

from flask import render_template, jsonify, url_for

from app.tasktype import blueprint
from app.base.models import User


@blueprint.route('/<template>', methods=['GET', 'POST'])
@login_required
def route_template(template):
    if "long_task" == str(template):
        task = app.tasks.long_task.apply_async()
        print(task.id)
        taskstatus(task.id)
        return jsonify({}), 202, {'Location': url_for('taskstatus',
                                                      task_id=task.id)}


@blueprint.route('/status/<task_id>')
def taskstatus(task_id):
    task = app.tasks.long_task.AsyncResult(task_id)
    if task.state == 'PENDING':
        response = {
            'state': task.state,
            'current': 0,
            'total': 1,
            'status': 'Pending...'
        }
    elif task.state != 'FAILURE':
        response = {
            'state': task.state,
            'current': task.info.get('current', 0),
            'total': task.info.get('total', 1),
            'status': task.info.get('status', '')
        }
        if 'result' in task.info:
            response['result'] = task.info['result']
    else:
        # something went wrong in the background job
        response = {
            'state': task.state,
            'current': 1,
            'total': 1,
            'status': str(task.info),  # this is the exception raised
        }
    print(response)
    return jsonify(response)