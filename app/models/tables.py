from app import db

class UserCompany(db.Model):
    __tablename__ = "users_company"

    id = db.Column(db.Integer, primary_key = True)
    company_name = db.Column(db.String)
    cnpj = db.Column(db.String(14), unique = True)
    username = db.Column(db.String, unique = True)
    email = db.Column(db.String, unique = True)
    password = db.Column(db.String)

    
    def __init__(self, company_name, cnpj, username, email, password):
        self.company_name = company_name
        self.cnpj = cnpj
        self.username = username
        self.email = email
        self.password = password


    def __repr__(self): #é a formatação da apresentação dos registros
        return "<User %r>" % self.username


class UserSchool(db.Model):
    __tablename__ = "users_school"

    id = db.Column(db.Integer, primary_key = True)
    school_name = db.Column(db.String)
    username = db.Column(db.String, unique = True)
    email = db.Column(db.String, unique = True)
    password = db.Column(db.String)
    uf_state = db.Column(db.String(2))
    city = db.Column(db.String)

    
    def __init__(self, id, school_name, username, email, password):
        self.school_name = school_name
        self.username = username
        self.email = email
        self.password = password
        self.uf_state = uf_state
        self.city = city


    def __repr__(self):
        return "<User %r>" % self.username


class UserStudent(db.Model):
    __tablename__ = "users_school" 

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    age = db.Column(db.Integer)
    username = db.Column(db.String, unique = True)
    email = db.Column(db.String, unique = True)
    password = db.Column(db.String)
    school = db.Column(db.String, db.ForeignKey('users_school.school_name'))
    uf_state = db.Column(db.String(2))
    city = db.Column(db.String)


    def __init__(self, name, age, username, email, password, school, uf_state, city):
        self.name = name
        self.age = age
        self.username = username
        self.email = email
        self.password = password
        self.school = school
        self.uf_state = uf_state
        self.city = city


    def __repr__(self):
        return "<User %r>" % self.username

