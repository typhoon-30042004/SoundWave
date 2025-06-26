from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'speech_therapy'
app.secret_key = 'your_secret_key_here'

mysql = MySQL(app)

# Route for Login Page
@app.route('/')
def index():
    return render_template('login.html')

# Route for handling login logic
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    role = request.form['role']

    cursor = mysql.connection.cursor()
    query = "SELECT * FROM login WHERE username=%s AND password=%s AND role=%s"
    cursor.execute(query, (username, password, role))
    user = cursor.fetchone()
    cursor.close()

    if user:
        if role == 'Admin':
            return redirect(url_for('admin'))
        elif role == 'Supervisor':
            return redirect(url_for('supervisor'))
        elif role == 'Therapist':
            return redirect(url_for('therapist_dashboard'))
    else:
        flash('Invalid credentials. Please try again.')
        return redirect(url_for('index'))

# Route for Admin page
@app.route('/admin')
def admin():
    return render_template('admin.html')

# Route for Supervisor page
@app.route('/supervisor')
def supervisor():
    return render_template('supervisor.html')

# Route for Therapist dashboard page
@app.route('/therapist_dashboard')
def therapist_dashboard():
    return render_template('dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
