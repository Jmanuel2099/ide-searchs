# ide-searchs
This application integrates breadth-first, depth-first, A*, uniform cost and first-best search algorithms to find a solution to the game of cannibals and missionaries.

## Tech Stack
- Backend: [Python](https://www.python.org/)
- Backend-Framework: [Django](https://docs.djangoproject.com/en/4.1/)


### Running the backend project

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

## Instructions to consume the backend. 

- Endpoints: 
    - Best first search: http://127.0.0.1:8000/cannibals_monks/best_first
    - Uniform cost search: http://127.0.0.1:8000/cannibals_monks/uniform_cost
    - Depth first search: http://127.0.0.1:8000/cannibals_monks/dfs
    - Breadth first search: http://127.0.0.1:8000/cannibals_monks/bfs

- Request body:
```json
    {
        "cannibals": 2,
        "missionary": 3,
        "side": "left",
        "time": 1000
    }
```

- Response: 
```json
{
	"path": [
		{
			"missionary": 3,
			"cannibals": 2,
			"side": "left"
		},
		{
			"missionary": 3,
			"cannibals": 3,
			"side": "right"
		},
		{
			"missionary": 2,
			"cannibals": 2,
			"side": "left"
		},
		{
			"missionary": 3,
			"cannibals": 2,
			"side": "right"
		},
		{
			"missionary": 3,
			"cannibals": 0,
			"side": "left"
		},
		{
			"missionary": 3,
			"cannibals": 1,
			"side": "right"
		},
		{
			"missionary": 1,
			"cannibals": 1,
			"side": "left"
		},
		{
			"missionary": 2,
			"cannibals": 2,
			"side": "right"
		},
		{
			"missionary": 0,
			"cannibals": 2,
			"side": "left"
		},
		{
			"missionary": 0,
			"cannibals": 3,
			"side": "right"
		},
		{
			"missionary": 0,
			"cannibals": 1,
			"side": "left"
		},
		{
			"missionary": 1,
			"cannibals": 1,
			"side": "right"
		},
		{
			"missionary": 0,
			"cannibals": 0,
			"side": "left"
		}
	],
	"path_len": 13,
	"generated_nodes": 18,
	"win": true
}
```

- Error message: 
```json
{
    "path": [],
    "path_len": 0,
    "generated_nodes": 0,
    "win": false,
    "error": "You lost, there are more cannibals than missionaries."
}
```

<!-- |                       Request                       |                       Response                        |
| :-----------------------------------------------------: | :-----------------------------------------------------------: |
| ![DFS_request](./images_documentation/DFS_request.png?raw=true) | ![DFS_response](./images_documentation/DFS_response.png?raw=true) | -->
