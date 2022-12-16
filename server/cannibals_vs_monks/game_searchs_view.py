import json
import sys
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from cannibals_vs_monks.searchs.breadth_first_search import BreadthFirstSearch
from cannibals_vs_monks.searchs.depth_first_search import DepthFirstSearch
from cannibals_vs_monks.searchs.best_first_search import BestFirstSearch
from cannibals_vs_monks.searchs.uniform_cost_search import UniformCostSearch
from cannibals_vs_monks.searchs.statistics import Statistics

class GameSearchsView:

    @csrf_exempt
    def bfs_search(self, request):
        try:
            request_body = json.loads(request.body)
            is_correct = self.__examinate_input_data(request_body)
            if len(is_correct) != 0:
                return HttpResponse({'error': is_correct}, content_type="application/json", status=400)

            cannibals = request_body['cannibals']
            missionary = request_body['missionary']
            side = request_body['side']
            initial_state = (missionary, cannibals, side, missionary + cannibals )
            bfs_search = BreadthFirstSearch()
            bfs_search.bfs(initial_state, request_body['time'])
            path = bfs_search.get_visited_states()
            data = json.dumps({
                'path': self.__map_states(path),
                'path_len': len(path),
                'generated_nodes': bfs_search.get_node_generated(),
                'win' : bfs_search.get_win()
            })
            return HttpResponse(data, content_type="application/json", status=200)
        except Exception:
            e = sys.exc_info()[1]
            print(e.args[0])
            error_message = 'No solution can be found from state (%s, %s, %s)' %(missionary, cannibals, side)
            return HttpResponse({'error': error_message}, content_type="application/json", status=404)

    @csrf_exempt
    def dfs_search(self, request):
        try:
            request_body = json.loads(request.body)
            is_correct = self.__examinate_input_data(request_body)
            if len(is_correct) != 0:
                return HttpResponse({'error': is_correct}, content_type="application/json", status=400)
            
            cannibals = request_body['cannibals']
            missionary = request_body['missionary']
            side = request_body['side']
            initial_state = (missionary, cannibals, side, missionary + cannibals )
            dfs_search = DepthFirstSearch()
            dfs_search.dfs(initial_state, request_body['time'])
            path = dfs_search.get_visited_states()
            data = json.dumps({
                'path': self.__map_states(path),
                'path_len': len(path),
                'generated_nodes': dfs_search.get_node_generated(),
                'win' : dfs_search.get_win()
            })
            return HttpResponse(data, content_type="application/json", status=200)
        except Exception:
            e = sys.exc_info()[1]
            print(e.args[0])
            error_message = 'No solution can be found from state (%s, %s, %s)' %(missionary, cannibals, side)
            return HttpResponse({'error': error_message}, content_type="application/json", status=404)
    
    @csrf_exempt
    def best_first_search(self, request):
        try:
            request_body = json.loads(request.body)
            is_correct = self.__examinate_input_data(request_body)
            if len(is_correct) != 0:
                return HttpResponse({'error': is_correct}, content_type="application/json", status=400)
            
            cannibals = request_body['cannibals']
            missionary = request_body['missionary']
            side = request_body['side']
            initial_state = (missionary, cannibals, side, missionary + cannibals )
            best_first = BestFirstSearch()
            best_first.best_first(initial_state, request_body['time'])
            path = best_first.get_path()
            data = json.dumps({
                'path': self.__map_states(path),
                'path_len': len(path),
                'generated_nodes': best_first.get_node_generated(),
                'win' : best_first.get_win()
            })
            return HttpResponse(data, content_type="application/json", status=200)
        except Exception: 
            e = sys.exc_info()[1]
            print(e.args[0])
            error_message = 'No solution can be found from state (%s, %s, %s)' %(missionary, cannibals, side)
            return HttpResponse({'error': error_message}, content_type="application/json", status=404)

    @csrf_exempt
    def uniform_cost_search(self, request):
        try:
            request_body = json.loads(request.body)
            is_correct = self.__examinate_input_data(request_body)
            if len(is_correct) != 0:
                return HttpResponse({'error': is_correct}, content_type="application/json", status=400)
            
            cannibals = request_body['cannibals']
            missionary = request_body['missionary']
            side = request_body['side']
            initial_state = (missionary, cannibals, side, missionary + cannibals )
            uniform_cost = UniformCostSearch()
            uniform_cost.uniform_cost(initial_state, request_body['time'])
            path = uniform_cost.get_path()
            data = json.dumps({
                'path': self.__map_states(path),
                'path_len': len(path),
                'generated_nodes': uniform_cost.get_nodes_generated(),
                'win' : uniform_cost.get_win()
            })
            return HttpResponse(data, content_type="application/json", status=200)
        except Exception:
            e = sys.exc_info()[1]
            print(e.args[0])
            error_message = 'No solution can be found from state (%s, %s, %s)' %(missionary, cannibals, side)
            return HttpResponse({'error': error_message}, content_type="application/json", status=404)

    @csrf_exempt
    def get_statistics(self, request):
        try:
            request_body = json.loads(request.body)
            is_correct = self.__examinate_input_data(request_body)
            if len(is_correct) != 0:
                return HttpResponse({'error': is_correct}, content_type="application/json", status=400)
            
            cannibals = request_body['cannibals']
            missionary = request_body['missionary']
            side = request_body['side']
            initial_state = (missionary, cannibals, side, missionary + cannibals )
            statistics = Statistics()
            unified_statistics = statistics.get_statistics(initial_state, request_body['time'])
            data = json.dumps(unified_statistics)
            return HttpResponse(data, content_type="application/json", status=200)
        except:
            e = sys.exc_info()[1]
            print(e.args[0])
            error_message = 'No solution can be found from state (%s, %s, %s)' %(missionary, cannibals, side)
            return HttpResponse({'error': error_message}, content_type="application/json", status=404)

    def __map_states(self, states):
        """
        Maps the elements of the list states to be able to return it
        as a response to a request.

        states: list() -> [(0, 1, right, 1), (0, 0, letf, 0)]
        return [
            {'missionary': 0, 'cannibals':1, 'side': right}, 
            {'missionary': 0, 'cannibals':0, 'side': left}
            ]
        """
        mapped_states = []
        for state in states:
            mapped_states.append({
                'missionary' : state[0],
                'cannibals': state[1],
                'side': state[2]
            })
        return mapped_states

    def __examinate_input_data(self, data):
        """
        Validates the data coming in at the end point to be able to work
        with correct data. 
        """
        if (data['cannibals'] > 3 or data['cannibals'] < 0 
            or data['missionary'] > 3 or data['missionary'] < 0):
            return'Missionary and cannibals must be between 0 and 3'
        
        if data['side'] != 'right' and data['side'] != 'left':
            return 'The strings allowed for the side are right and left'

        if data['cannibals'] > data['missionary']:
            return 'You lost, there are more cannibals than missionaries.'

        if data['time'] < 0:
            return 'Invalid time'
        return ''
