# Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

# You must not use any built-in exponent function or operator.

# For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

class Solution(object):
    def mySqrt(self, x):
        if x == 0 or x == 1:
            return x

        # Initial guess for the square root
        guess = x // 2

        while True:
            new_guess = (guess + x // guess) // 2
            if new_guess >= guess:
                return guess
            guess = new_guess