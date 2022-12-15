# ide-searchs
This application integrates breadth-first, depth-first, A*, uniform cost and first-best search algorithms to find a solution to the game of cannibals and missionaries.

## Tech Stack
- Backend: [Python](https://www.python.org/)
- Backend-Framework: [Django](https://docs.djangoproject.com/en/4.1/)


### Running the project

- Backend project

Creates and activte a virtual environment 
```bash
    py -m venv venv
    .\venv\Scripts\activate
```

Installs the dependencies 
```bash
    pip install -r requirements.txt
```

Run backend project
```bash
    python manage.py runserver
```

|                                      Depth First Search                                              |
| :-----------------------------------------------------: | :-----------------------------------------------------------: |
|           Request                                      |               Response                       |
| ![DFS_request](./images_documentation/DFS_request.png?raw=true) | ![DFS_response](./images_documentation/DFS_response.png?raw=true) |