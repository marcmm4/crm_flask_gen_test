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
from app.management import blueprint
from app.base.forms import LoginForm, CreateAccountForm
from app.base.models import User




@blueprint.route('/<template>')
@login_required
def route_template(template):
    if "users" == str(template):
        users = User.query.all()
    return render_template(template + '.html', users=users)

