from flask_restful import reqparse,Resource
from flask import request
import json
import random,time,datetime

_alarm = reqparse.RequestParser()

class testMethod():
	def getEeo(rnd):
		_run = random.randint(0,rnd)
		rnd -= _run
		_idle = random.randint(0,rnd)
		rnd -= _idle
		_alarm = random.randint(0,rnd)
		_pm = rnd - _alarm
		return {'run':_run,'idle':_idle,'alarm':_alarm,'pm':_pm}

	def getCurEeo(startat):
		_time = time.time()//60%1440

		if _time < startat:
			return testMethod.getEeo(0)
		elif _time < startat + 480:
			return testMethod.getEeo(_time-startat)
		else:
			return testMethod.getEeo(_time-startat-480)

	def getEeoClassSerial(startat):
		rtn = {'run':[],'idle':[],'alarm':[],'pm':[]}
		for i in range(6):
			_data = testMethod.getEeo(480)
			rtn['run'].append(_data['run'])
			rtn['idle'].append(_data['idle'])
			rtn['alarm'].append(_data['alarm'])
			rtn['pm'].append(_data['pm'])
		_cur = testMethod.getCurEeo(startat)

		rtn['run'].append(_cur['run'])
		rtn['idle'].append(_cur['idle'])
		rtn['alarm'].append(_cur['alarm'])
		rtn['pm'].append(_cur['pm'])

		return rtn

	'''
	web service api
	'''
	def getEeoSerial():
		rtn = {}

		
		rtn['class1'] = testMethod.getEeoClassSerial(0)
		rtn['class2'] = testMethod.getEeoClassSerial(8)
		rtn['class3'] = testMethod.getEeoClassSerial(16)
		return True,rtn
	pass



class AlarmApi(Resource):
	


	def get(self):

		pass

	def post(self):
		_cmd = request.form.get('cmd')
		_param = request.form.get('param')
		if _cmd == "getAlarmPie":
			rtn = {}
			rtn['success'],rtn['data'] = testMethod.getEeoSerial()
			rtn['xlabel'] = self.getSerialXLable()
			print(rtn)
			return rtn,200
			
		pass

	def put(self):
		pass

	def delete(self):
		pass

	pass