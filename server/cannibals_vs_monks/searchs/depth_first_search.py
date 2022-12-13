from cannibals_vs_monks.searchs.game_metrics import GameMetrics
from treelib import Tree

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

    def dfs(self, initial_state):
        self.state_stack.append(initial_state)

        while not self.win and self.state_stack:
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
        if self.game_metrics.boat_is_at_right(game_state):
            return self.game_metrics.get_boat_at_right_new_states(game_state)
        else:
            return self.game_metrics.get_boat_at_left_new_states(game_state)