class GameMetrics:

    def __init__(self) -> None:
        pass

    def is_win(self, game_state):
        return game_state[0] == game_state[1] == 0
    
    def boat_is_at_right(self, game_state):
        return game_state[2] == 'right'

    def boat_is_at_left(self, game_state):
        return game_state[2] == 'left'

    def get_boat_at_right_new_states(self, game_state):
        """
        From a current state that has the boat on the right, 
        obtains the possible states that can be generated from the current state.
        """
        new_states = []
        for missionary in range(game_state[0] + 1):
            for cannibal in range(game_state[1] + 1):
                if missionary + cannibal < 1 or missionary + cannibal > 2:
                    continue
                new_missionary = game_state[0] - missionary
                new_cannibal = game_state[1] - cannibal
                new_state = (new_missionary, new_cannibal, 'left', new_missionary + new_cannibal)
                if 0 < new_state[0] < new_state[1]:
                    continue
                if 0 < 3 - new_state[0] < 3 - new_state[1]:
                    continue
                new_states.append(new_state)
        return new_states

    def get_boat_at_left_new_states(self, game_state):
        """
        From a current state that has the boat on the left, 
        obtains the possible states that can be generated from the current state.
        """
        new_states = []
        for missionary in range(3 - game_state[0] + 1):
            for cannibal in range(3 - game_state[1] + 1):
                if missionary + cannibal < 1 or missionary + cannibal > 2:
                    continue
                new_missionary = game_state[0] + missionary 
                new_cannibal =  game_state[1] + cannibal
                new_state = (new_missionary, new_cannibal, 'right', new_missionary + new_cannibal)
                if 0 < new_state[0] < new_state[1]:
                    continue
                if 0 < 3 - new_state[0] < 3 - new_state[1]:
                    continue
                new_states.append(new_state)
        return new_states

    def find_best_frontier(self, frontier_states, side):
        """
        Obtains the best state from its weight to be used in the best-first
        and uniform-cost search algorithms. 
        """
        min_value = 100000
        best_frontier = set()
        for frontier in frontier_states:
            if frontier[2] != side:
                continue
            if frontier[3] < min_value:
                min_value = frontier[3]
                best_frontier = frontier
        return best_frontier
