from flask_wtf import FlaskForm
from wtforms import TextField, PasswordField

## login and registration

class ModifyAccountForm(FlaskForm):
    email = TextField('Email')
    password = PasswordField('Password', id='pwd_create')
