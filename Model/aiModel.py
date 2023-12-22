YOUR_API_KEY = ""
userInput = "Give me best suggestions for laptop buying"

from fastapi import FastAPI, Request
import requests
import json

app = FastAPI()

@app.post('/create')
async def root(request: Request):
    # Receive JSON data from the request body
    request_data = await request.json()

    # Extract the description from the received JSON data
    title = request_data.get("title", "")


    # Define the URL and API key
    url = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key="+YOUR_API_KEY

    # Replace 'YOUR_API_KEY' with your actual API key

    # Define the headers and payload
    headers = {'Content-Type': 'application/json'}
    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {
                        "text": f'Create a Jira Ticket in JSON Format for {title}. Required Fields are Title, Description, Label,  Priority, Testing Instructions for QA, Acceptance Criteria'
                    }
                ]
            }
        ]
    }

    # Convert the payload to JSON format
    json_payload = json.dumps(payload)

    # Make the HTTP request
    response = requests.post(url, headers=headers, data=json_payload)

    # Print the response
    API_Result =  response.json().get("candidates")[0].get("content").get("parts")[0]
    return {'Response':API_Result}

@app.get('/update')
async def root():
    # Define the URL and API key
    url = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key="+YOUR_API_KEY

    # Replace 'YOUR_API_KEY' with your actual API key

    # Define the headers and payload
    headers = {'Content-Type': 'application/json'}
    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {
                        "text": f'{userInput}'
                    }
                ]
            }
        ]
    }

    # Convert the payload to JSON format
    json_payload = json.dumps(payload)

    # Make the HTTP request
    response = requests.post(url, headers=headers, data=json_payload)

    # Print the response
    API_Result =  response.json().get("candidates")[0].get("content").get("parts")[0]
    return {'Response':API_Result}
