"""
URLs do app core — mapeia cada página do Mindly para uma view.
Namespace: 'core'  →  use {% url 'core:index' %} nos templates.
"""

from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    # ---- Páginas públicas ----
    path('',                        views.IndexView.as_view(),           name='index'),
    path('sobre/',                  views.SobreView.as_view(),           name='sobre'),
    path('suporte/',                views.SuporteView.as_view(),         name='suporte'),
    path('ferramentas/',            views.FerramentasView.as_view(),     name='ferramentas'),
    path('planos/',                 views.PlanosView.as_view(),          name='planos'),
    path('premium/',                views.PremiumView.as_view(),         name='premium'),
    path('checkout/',               views.CheckoutView.as_view(),        name='checkout'),

    # ---- Autenticação ----
    path('login/',                  views.LoginView.as_view(),           name='login'),
    path('cadastro/',               views.CadastroView.as_view(),        name='cadastro'),

    # ---- Área logada ----
    path('dashboard/',              views.DashboardView.as_view(),       name='dashboard'),
    path('perfil/',                 views.PerfilView.as_view(),          name='perfil'),
    path('chat/',                   views.ChatView.as_view(),            name='chat'),

    # ---- Matérias ----
    path('materias/',               views.MateriasView.as_view(),        name='materias'),
    path('materias/humanas/',       views.MateriaHumanasView.as_view(),  name='materia-humanas'),
    path('materias/linguagens/',    views.MateriaLinguagensView.as_view(), name='materia-linguagens'),
    path('materias/matematica/',    views.MateriaMatematicaView.as_view(), name='materia-matematica'),
    path('materias/natureza/',      views.MateriaNaturezaView.as_view(), name='materia-natureza'),
    path('materias/redacao/',       views.MateriaRedacaoView.as_view(),  name='materia-redacao'),

    # ---- Ferramentas de estudo ----
    path('simulados/',              views.SimuladosView.as_view(),       name='simulados'),
    path('flashcards/',             views.FlashcardsView.as_view(),      name='flashcards'),
    path('pomodoro/',               views.PomodoroView.as_view(),        name='pomodoro'),
    path('cronograma/',             views.CronogramaView.as_view(),      name='cronograma'),
    path('redacao-ia/',             views.RedacaoIAView.as_view(),       name='redacao-ia'),
]
