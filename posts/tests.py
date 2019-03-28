from django.test import TestCase
from django.urls import reverse


class TestViews(TestCase):

    def test_list(self):
        view_url = reverse('allposts')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)

    def test_search_list(self):
        view_url = reverse('search')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)



