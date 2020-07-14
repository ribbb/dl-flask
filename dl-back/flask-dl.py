from flask import Flask

app = Flask(__name__)

@app.route('/infer')
def get_current_time():
    return {'message': "Hello world"}