"""
Views do app core — todas as páginas são servidas como TemplateViews simples.
Futuramente, views que exigem lógica de negócio (login, cadastro, dashboard)
serão convertidas para views baseadas em funções ou classes com Forms/Auth.
"""

from django.views.generic import TemplateView


# ------------------------------------------------------------------
# Páginas públicas
# ------------------------------------------------------------------

class IndexView(TemplateView):
    template_name = 'core/index.html'


class SobreView(TemplateView):
    template_name = 'core/sobre.html'


class SuporteView(TemplateView):
    template_name = 'core/suporte.html'


class FerramentasView(TemplateView):
    template_name = 'core/ferramentas.html'


class PlanosView(TemplateView):
    template_name = 'core/planos.html'


class PremiumView(TemplateView):
    template_name = 'core/premium.html'


class CheckoutView(TemplateView):
    template_name = 'core/checkout.html'


# ------------------------------------------------------------------
# Autenticação
# ------------------------------------------------------------------

class LoginView(TemplateView):
    template_name = 'core/login.html'


class CadastroView(TemplateView):
    template_name = 'core/cadastro.html'


# ------------------------------------------------------------------
# Área logada
# ------------------------------------------------------------------

class DashboardView(TemplateView):
    template_name = 'core/dashboard.html'


class PerfilView(TemplateView):
    template_name = 'core/perfil.html'


class ChatView(TemplateView):
    template_name = 'core/chat.html'


# ------------------------------------------------------------------
# Matérias
# ------------------------------------------------------------------

class MateriasView(TemplateView):
    template_name = 'core/materias.html'


class MateriaHumanasView(TemplateView):
    template_name = 'core/materia-humanas.html'


class MateriaLinguagensView(TemplateView):
    template_name = 'core/materia-linguagens.html'


class MateriaMatematicaView(TemplateView):
    template_name = 'core/materia-matematica.html'


class MateriaNaturezaView(TemplateView):
    template_name = 'core/materia-natureza.html'


class MateriaRedacaoView(TemplateView):
    template_name = 'core/materia-redacao.html'


# ------------------------------------------------------------------
# Ferramentas de estudo
# ------------------------------------------------------------------

class SimuladosView(TemplateView):
    template_name = 'core/simulados.html'


class FlashcardsView(TemplateView):
    template_name = 'core/flashcards.html'


class PomodoroView(TemplateView):
    template_name = 'core/pomodoro.html'


class CronogramaView(TemplateView):
    template_name = 'core/cronograma.html'


class RedacaoIAView(TemplateView):
    template_name = 'core/redacao-ia.html'
