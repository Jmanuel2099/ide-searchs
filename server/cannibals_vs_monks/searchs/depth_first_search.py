from cannibals_vs_monks.searchs.game_metrics import GameMetrics
import time

#Busqueda por prfundidad 
class DepthFirstSearch:
    def __init__(self) -> None:
        self.game_metrics = GameMetrics()
        self.state_stack = list()
        self.visited_states = list()
        self.win = False
    
    def get_state_stack(self):
        return self.state_stack
    
    def get_visited_states(self):
        return self.visited_states

    def get_node_generated(self):
        return len(self.state_stack) + len(self.visited_states)
    
    def get_win(self):
        return self.win

    def dfs(self, initial_state, expected_time):
        """
        Initial_state: set() -> (missionaries, cannibals, ship side, cost having state)
        expected_time: int -> Is the time limit you have to search for the solution. 

        Try to find a solution to the game of cannibals and missionaries by means of
        the algorithm of deep search in a time interval

        The solution state of the game is that all missionaries and
        cannibals pass sideways and will be represented (0, 0, left, 0).
        """
        start = time.time()
        self.state_stack.append(initial_state)

        while not self.win and self.state_stack and (time.time() - start) <= expected_time:
            current_state = self.state_stack.pop()
            
            if current_state not in self.visited_states:
                print(current_state)
                self.visited_states.append(current_state)

            future_states = self.get_future_states(current_state)
            for future_state in future_states:
                if future_state not in self.visited_states:
                    self.state_stack.append(future_state)
            
            if self.game_metrics.is_win(current_state):
                self.win = True
                break
    
    def get_future_states(self, game_state):
        """
        Calculate the possible states that can be generated from
        a state, to continue the search for the solution. 
        """
        if self.game_metrics.boat_is_at_right(game_state):
            return self.game_metrics.get_boat_at_right_new_states(game_state)
        else:
            return self.game_metrics.get_boat_at_left_new_states(game_state)
