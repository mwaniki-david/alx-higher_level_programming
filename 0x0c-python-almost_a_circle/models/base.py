import unittest
class Base:
   _nb_objects = 0


   def _init(self, id=None):
       if id is not None:
           self.id = id
       else:
           Base_nb_object += 1
           self.id = Base._nb_objects

