from django.test import TestCase
from django.urls import reverse


class TestViews(TestCase):

    def test_detail(self):
        view_url = reverse('posts:map')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)

    def test_list(self):
        view_url = reverse('posts:yourposts')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, '<h1>Testing</h1>')

