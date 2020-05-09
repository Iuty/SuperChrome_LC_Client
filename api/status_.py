from flask_restful import reqparse,Resource
from flask import request
import json
import random,time,datetime

from IutyLib.database.mysql import MySql
from IutyLib.commonutil.argparser import getArgs


_status = reqparse.RequestParser()

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

mysql = MySql('localhost','root','fastcorp','superchrome')

class EqpStatus(mysql.Model):
    pass

class DBMethod:
    def getEeoData(eid,start,period):
        _db = EqpStatus()
        end = start + period
        data = _db.query(where=r"eid = '{}' and datetime > '{}' and datetime < '{}'".format(eid,start,end))
        rtn = {'run':datetime.timedelta(0),'idle':datetime.timedelta(0),'alarm':datetime.timedelta(0),'pm':datetime.timedelta(0)}
        if len(data) == 0:
            return rtn
        data.insert(0,{"datetime":start})
        data.append({"datetime":end,"prestatus":data[-1]["curstatus"]})
        for i in range(1,len(data)):
            rtn[data[i]["prestatus"]] += (data[i]["datetime"] - data[i-1]["datetime"])
        return rtn
    
    
    def getMinuteEeoData(eid,start,period):
        _data = DBMethod.getEeoData(eid,start,period)
        rtn = {}
        for key in _data:
            rtn[key] = _data[key].seconds//60
        return rtn
    
    def getClassDateTime(classastart,classcount):
        period = datetime.timedelta(1)/classcount
        rtn = []
        for i in range(classcount):
            rtn.append([classastart+period*i,period])
        return rtn
    
    def getDateEeoData(eid,date,classcount):
        pass
    
    pass

class StatusApi(Resource):
    
    def getSerialXLable(self):
        rtn = []
        today = datetime.date.today()
        for i in range(7):
            date = today + datetime.timedelta(days = (-1)*i)
            rtn.insert(0,date.strftime("%y-%m-%d"))
        return rtn


    def get(self):
        
        pass

    def post(self):
        
        #_cmd = request.form.get('cmd')
        #_param = request.form.get('param')
        _cmd = getArgs("cmd")
        _param = getArgs("param")
        if _cmd == "getEeoSerial":
            rtn = {}
            rtn['success'],rtn['data'] = testMethod.getEeoSerial()
            rtn['xlabel'] = self.getSerialXLable()
            #print(rtn)
            return rtn,200
            
        pass

    def put(self):
        pass

    def delete(self):
        pass

    pass
    
if __name__ == "__main__":
    print(DBMethod.getMinuteEeoData('eee',datetime.datetime(2020,4,9,12),datetime.timedelta(0,12*60*60)))
    print(DBMethod.getClassDateTime(datetime.datetime(2020,4,9,12),3))