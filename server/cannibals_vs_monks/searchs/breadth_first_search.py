from cannibals_vs_monks.searchs.game_metrics import GameMetrics
import time

#busqueda por anchura
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
        print(expected_time)
        start = time.time()
        current_time = 0
        self.state_queue.append(initial_state)

        while not self.win and self.state_queue and (current_time - start) <= expected_time:
            # print(current_time - start)
            current_state = self.state_queue.pop(0)
            
            if current_state not in self.visited_states:
                # print(current_state)
                self.visited_states.append(current_state)

            future_states = self.get_future_states(current_state)
            for future_state in future_states:
                if future_state not in self.visited_states:
                    self.state_queue.append(future_state)
            
            if self.game_metrics.is_win(current_state):
                self.win = True
                break
            current_time = time.time()
            # print(current_time)
    
    def get_future_states(self, game_state):
        if self.game_metrics.boat_is_at_right(game_state):
            return self.game_metrics.get_boat_at_right_new_states(game_state)
        else:
            return self.game_metrics.get_boat_at_left_new_states(game_state)

