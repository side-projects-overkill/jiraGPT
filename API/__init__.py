import os
import dotenv

dotenv.load_dotenv('./env')

class Config(object):
  JIRA_TOKEN = os.environ.get('JIRA_TOKEN')
  JIRA_HOST = os.environ.get('JIRA_HOST')
