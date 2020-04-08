from flask_restful import reqparse,Resource
from flask import request
import json

_user = reqparse.RequestParser()

class UserApi(Resource):
	def get(self):
		return 'get method'
		pass

	def post(self):
		
		_user.add_argument('username',required=True,help="User name is required")
		_user.add_argument('password',required=True,help="Password is required")
		args = _user.parse_args()

		usrnm = args['username']
		#psw = args['password']
		print(usrnm)
		
		print(request.form.get('password'))
		
		return {'success':True},200
		

		pass

	def put(self):
		pass

	def delete(self):
		pass