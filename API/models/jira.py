from pydantic import BaseModel

class IssueType(BaseModel):
  name:str

class Project(BaseModel):
  key: str

class Fields(BaseModel):
  project: Project
  summary: str
  description: str
  labels: list[str]
  issueType: IssueType


class Ticket(BaseModel):
  fields: Fields
