from flask import Flask,session
from flask_restful import Api,Resource
import datetime
from api.user_ import *
from api.status_ import *

app = Flask(__name__,static_folder='static/')
api = Api(app)

host = '127.0.0.1'
port = '8000'

app.config['SECRET_KEY'] = 'myskey'
app.config['PERMANENT_SESSION_LIFETIME']=datetime.timedelta(days=15)

@app.route("/",methods=["GET","POST"])
def index():

	return app.send_static_file("index.html")

@app.route("/test",methods=["GET","POST"])
def test():

	return app.send_static_file("test.html")

#app.add_resource(class,'/path')
api.add_resource(UserApi,'/user')
api.add_resource(StatusApi,'/status')

if __name__ == "__main__":
	
	
	app.run(host = host,port = port,debug = True)
