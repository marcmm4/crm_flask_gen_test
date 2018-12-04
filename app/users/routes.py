'''
from app.users import blueprint
from flask import render_template
from flask_login import login_required
'''
from bcrypt import checkpw
from flask import jsonify, render_template, redirect, request, url_for
from flask_login import (
    current_user,
    login_required,
    login_user,
    logout_user
)

from app import db, login_manager
from app.users import blueprint
from app.base.models import User
from app.users.forms import ModifyUserForm




@blueprint.route('/<template>', methods=['GET', 'POST'])
@login_required
def route_template(template):
    user = User.query.filter_by(id=template).first()
    modify_user_form = ModifyUserForm()
    return render_template('user.html', user=user, modify_user_form=modify_user_form)


@blueprint.route('/modify_user', methods=['POST'])
def modify_user():
    form_data = User(**request.form)
    db_data = User.query.get(form_data.id)
    change = False
    if db_data.email != form_data.email:
        db_data.email = form_data.email
        change = True
    if db_data.firstname != form_data.firstname:
        db_data.firstname = form_data.firstname
        change = True
    if db_data.lastname != form_data.lastname:
        db_data.lastname = form_data.lastname
        change = True
    if change:
        db.session.commit()
        return jsonify('success')
    else:
        return jsonify('no_change')
    return jsonify('error')