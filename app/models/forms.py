from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email

class LoginForm(FlaskForm):
    email = StringField("email", [DataRequired(), Email(message="Informe um email válido")])
    password = PasswordField("password", validators=[DataRequired()])