from fastapi import APIRouter, FastAPI, Request
from fastapi.datastructures import URL
import requests
from jira.api import create_jira_ticket
import requests

app = FastAPI()
@app.get('/')
def get_root():
  return {"Hello": "World"}


rootApi = APIRouter(prefix='/api')
@rootApi.post('/create')
def create(body, req:Request):
  
  resp = requests.post(req.base_url,data=body)

  create_jira_ticket(resp.json())
  return {"status": resp.status_code}
  



app.include_router(rootApi)
