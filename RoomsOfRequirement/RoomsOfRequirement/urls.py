from django.urls import path, include

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include('Frontend.urls')),
    path('', include('Classrooms.urls')),
]
