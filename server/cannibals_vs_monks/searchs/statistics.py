from cannibals_vs_monks.searchs.breadth_first_search import BreadthFirstSearch
from cannibals_vs_monks.searchs.depth_first_search import DepthFirstSearch
from cannibals_vs_monks.searchs.best_first_search import BestFirstSearch
from cannibals_vs_monks.searchs.uniform_cost_search import UniformCostSearch


class Statistics:
    def __init__(self) -> None:
        pass

    def get_statistics(self, initial_state, expected_time):
        statistics_bfs = self.__run_bfs(initial_state, expected_time)
        statistics_dfs = self.__run_dfs(initial_state, expected_time)
        statistics_best_first = self.__run_best_first(initial_state, expected_time)
        statistics_uniform_cost = self.__run_uniform_cost(initial_state, expected_time)
        path_sizes = {
            'bfs': statistics_bfs['path_size'], 
            'dfs': statistics_dfs['path_size'],
            'best_first': statistics_best_first['path_size'],
            'uniform_cost': statistics_uniform_cost['path_size']
        }
        
        return {
            'best_algorithm': min(path_sizes, key=path_sizes.get),
            'bfs' : statistics_bfs,
            'dfs' : statistics_dfs,
            'best_first' : statistics_best_first,
            'uniform_cost' : statistics_uniform_cost
        }


    def __run_bfs(self, initial_state, expected_time):
        breadth_first = BreadthFirstSearch()
        breadth_first.bfs(initial_state, expected_time)
        path_size = len(breadth_first.get_visited_states())
        node_generated = breadth_first.get_node_generated()
        return {'path_size': path_size, 'node_generated':node_generated}

    def __run_dfs(self, initial_state, expected_time):
        depth_first = DepthFirstSearch()
        depth_first.dfs(initial_state, expected_time)
        path_size = len(depth_first.get_visited_states())
        node_generated = depth_first.get_node_generated()
        return {'path_size': path_size, 'node_generated':node_generated}

    def __run_best_first(self, initial_state, expected_time):
        best_first = BestFirstSearch()
        best_first.best_first(initial_state, expected_time)
        path_size = len(best_first.get_path())
        node_generated = best_first.get_node_generated()
        return {'path_size': path_size, 'node_generated':node_generated}

    def __run_uniform_cost(self, intial_state, expected_time):
        uniform_cost = UniformCostSearch()
        uniform_cost.uniform_cost(intial_state, expected_time)
        path_size = len(uniform_cost.get_path())
        node_generated = uniform_cost.get_nodes_generated()
        return {'path_size': path_size, 'node_generated':node_generated}
