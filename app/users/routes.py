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
from app.base.forms import LoginForm, CreateAccountForm
from app.base.models import User




@blueprint.route('/<template>')
@login_required
def route_template(template):
    print(template)
    user = User.query.filter_by(id=template).first()
    return render_template('user.html', user=user)

