import models
import unittesting

class TestCalc(unittest.TestCase):

    def Test_add(self):
        result = calc.add(19, 5)
        self.assertEqual(result, 24)


if __name == '__main__':
    unittest.main()
