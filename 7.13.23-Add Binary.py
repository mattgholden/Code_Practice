# Given two binary strings a and b, return their sum as a binary string.

class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        carry = 0
        result = []
        max_len = max(len(a), len(b))
        a = a.zfill(max_len)
        b = b.zfill(max_len)

        for i in range(max_len - 1, -1, -1):
            bit_sum = int(a[i]) + int(b[i]) + carry
            result.insert(0, str(bit_sum % 2))  
            carry = bit_sum // 2

        if carry:
            result.insert(0, str(carry)) 

        return ''.join(result)