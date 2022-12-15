from cannibals_vs_monks.searchs.game_metrics import GameMetrics
import time

#Busqueda por anchura
class BreadthFirstSearch:
    def __init__(self) -> None:
        self.game_metrics = GameMetrics()
        self.state_queue = list()
        self.visited_states = list()
        self.win = False
    
    def get_state_queue(self):
        return self.state_queue
    
    def get_visited_states(self):
        return self.visited_states

    def get_win(self):
        return self.win

    def get_node_generated(self):
        return len(self.state_queue) + len(self.visited_states)

    def bfs(self, initial_state, expected_time):
        """
        Initial_state: set() -> (missionaries, cannibals, ship side, cost having state)
        expected_time: int -> Is the time limit you have to search for the solution.

        Try to find a solution to the game of cannibals and missionaries by means of
        the algorithm of breadth search in a time interval.

        The solution state of the game is that all missionaries and
        cannibals pass sideways and will be represented (0, 0, left, 0).
        """
        print(expected_time)
        start = time.time()
        current_time = 0
        self.state_queue.append(initial_state)

        while not self.win and self.state_queue and (current_time - start) <= expected_time:
            current_state = self.state_queue.pop(0)
            
            if current_state not in self.visited_states:
                self.visited_states.append(current_state)

            future_states = self.get_future_states(current_state)
            for future_state in future_states:
                if future_state not in self.visited_states:
                    self.state_queue.append(future_state)
            
            if self.game_metrics.is_win(current_state):
                self.win = True
                break
            current_time = time.time()
    
    def get_future_states(self, game_state):
        """
        Calculate the possible states that can be generated from
        a state, to continue the search for the solution.
        """
        if self.game_metrics.boat_is_at_right(game_state):
            return self.game_metrics.get_boat_at_right_new_states(game_state)
        else:
            return self.game_metrics.get_boat_at_left_new_states(game_state)
