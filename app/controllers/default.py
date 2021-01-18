from flask import render_template
from app import app 
from app.models.forms import LoginForm

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')
