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
        new_states = []
        for missionary in range(game_state[0] + 1):
            for cannibal in range(game_state[1] + 1):
                if missionary + cannibal < 1 or missionary + cannibal > 2:
                    continue
                new_state = (game_state[0] - missionary, game_state[1] - cannibal, 'left')
                if 0 < new_state[0] < new_state[1]:
                    continue
                if 0 < 3 - new_state[0] < 3 - new_state[1]:
                    continue
                new_states.append(new_state)
        return new_states

    def get_boat_at_left_new_states(self, game_state):
        new_states = []
        for missionary in range(3 - game_state[0] + 1):
            for cannibal in range(3 - game_state[1] + 1):
                if missionary + cannibal < 1 or missionary + cannibal > 2:
                    continue
                new_state = (game_state[0] + missionary, game_state[1] + cannibal, 'right')
                if 0 < new_state[0] < new_state[1]:
                    continue
                if 0 < 3 - new_state[0] < 3 - new_state[1]:
                    continue
                new_states.append(new_state)
        return new_states

    def find_best_frontier(self, frontier_states, side, compute_fn):
        min_value = 100000
        min_state = -1
        for state in frontier_states:
            if state[2] != side:
                continue
            fn = compute_fn(state)
            if fn < min_value:
                min_value = fn
                min_state = state
        return min_state, min_value