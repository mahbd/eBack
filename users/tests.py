from django.test import TestCase
from django.test import Client

from .models import User

http = Client()


class LoginTestCase(TestCase):
    def setUp(self) -> None:
        User.objects.create_user(username='test1', email='mahmuduly2000@gmail.com', password='he2lk3loU9123456@')

    def test_tokenVerify(self):
        try:
            http.post('/users/token/', data={'email': 'mahmuduly2000@gmail.com', 'password': 'he2lk3loU9123456@'})
        except:
            self.assert_(False, 'Login not working')
