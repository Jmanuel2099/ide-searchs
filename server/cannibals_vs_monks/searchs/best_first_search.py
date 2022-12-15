from cannibals_vs_monks.searchs.game_metrics import GameMetrics
import time 


class BestFirstSearch:
    def __init__(self) -> None:
        self.game_metrics = GameMetrics()
        self.win = False
        self.frontier_states = list()
        self.path = list()
        self.side = ''
    
    def get_path(self):
        return self.path
    
    def get_win(self):
        return self.win

    def get_node_generated(self):
        return len(self.path) + len(self.frontier_states)

    def best_first(self, initial_state, expected_time):
        """
        Initial_state: set() -> (missionaries, cannibals, ship side, cost having state)
        expected_time: int -> Is the time limit you have to search for the solution. 

        Try to find a solution to the game of cannibals and missionaries by means 
        of the algorithm of search first the best one in a time interval

        The solution state of the game is that all missionaries and
        cannibals pass sideways and will be represented (0, 0, left or right, 0).
        """
        start = time.time()
        self.frontier_states.append(initial_state)
        self.side = initial_state[2]

        while not self.win and (time.time() - start) <= expected_time:
            best_frontier_state = self.game_metrics.find_best_frontier(self.frontier_states, self.side)
            self.toggle_side()

            self.frontier_states.remove(best_frontier_state)
            self.path.append(best_frontier_state)

            if self.game_metrics.is_win(best_frontier_state):
                self.win = True

            if self.game_metrics.boat_is_at_left(best_frontier_state):
                self.frontier_states += self.game_metrics.get_boat_at_left_new_states(best_frontier_state)
            elif self.game_metrics.boat_is_at_right(best_frontier_state):
                self.frontier_states += self.game_metrics.get_boat_at_right_new_states(best_frontier_state)
            
    def toggle_side(self):
        if self.side == 'right':
            self.side = 'left'
        else:
            self.side = 'right'
