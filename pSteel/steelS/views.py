from django.shortcuts import render

def index(request):
    return render(request, 'steelS/index.html', {})

def about(request):
    return render(request, 'steelS/know.html', {})

def jobs(request):
    return render(request, 'steelS/jobs.html', {})
