module.exports = {
  ra: {
    action: {
      add_filter: "Adicionar filtro",
      add: "Adicionar",
      back: "Voltar",
      bulk_actions: "1 item selecionado |||| %{smart_count} items selecionados",
      cancel: "Cancelar",
      clear_input_value: "Limpar campo",
      clone: "Duplicar",
      confirm: "Confirmar",
      create: "Criar",
      delete: "Apagar",
      edit: "Alterar",
      export: "Exportar",
      list: "Listar",
      refresh: "Atualizar",
      remove_filter: "Remover filtro",
      remove: "Remover",
      save: "Gravar",
      search: "Procurar",
      show: "Ver",
      sort: "Ordenar",
      undo: "Desfazer"
    },
    boolean: {
      true: "Sim",
      false: "Não"
    },
    page: {
      create: "Criar %{name}",
      dashboard: "Painel de controlo",
      edit: "%{name} #%{id}",
      error: "Ocurreu um erro",
      list: "%{name}",
      loading: "A carregar",
      not_found: "Não encontrado",
      show: "%{name} #%{id}"
    },
    input: {
      file: {
        upload_several:
          "Arraste os ficheiros para fazer o upload ou clique para selecionar.",
        upload_single:
          "Arraste o ficheiro para fazer o upload ou clique para selecionar."
      },
      image: {
        upload_several:
          "Arraste as imagens para fazer o upload ou clique para selecionar.",
        upload_single:
          "Arraste a imagem para fazer o upload ou clique para selecionar."
      },
      references: {
        all_missing: "Não foi possível encontrar os dados das referências.",
        many_missing: "Pelo menos uma das referências não está disponível.",
        single_missing: "A referência não está disponível."
      }
    },
    message: {
      about: "Sobre",
      are_you_sure: "Tem a certeza?",
      bulk_delete_content:
        "Tem certeza que deseja apagar %{name}? |||| Tem certeza que deseja apagar estes %{smart_count} itens?",
      bulk_delete_title: "Apagar %{name} |||| Apagar %{smart_count} %{name}",
      delete_content: "Tem a certeza que deseja apagar?",
      delete_title: "Apagar %{name} #%{id}",
      details: "Detalhes",
      error:
        "Ocorreu um erro no cliente. Não foi possível finalizar o seu pedido.",
      invalid_form: "O formulário apresenta erros.",
      loading: "A carregar. Um momento por favor.",
      no: "Nao",
      not_found: "Página não encontrada.",
      yes: "Yes"
    },
    navigation: {
      no_results: "Nenhum resultado encontrado.",
      no_more_results:
        "A página %{page} está fora dos limites. Tente a página anterior.",
      page_out_of_boundaries: "Página %{page} fora do limite",
      page_out_from_end: "Não é possível ir para depois da última página",
      page_out_from_begin: "Não é possível ir para antes da primeira página",
      page_range_info: "%{offsetBegin}-%{offsetEnd} de %{total}",
      page_rows_per_page: "Resultados por página:",
      next: "Próximo",
      prev: "Anterior"
    },
    auth: {
      user_menu: "Perfil",
      username: "Utilizador",
      password: "Password",
      sign_in: "Entrar",
      sign_in_error: "Erro na autenticação. Por favor volte a tentar.",
      logout: "Sair"
    },
    notification: {
      updated: "Item atualizado |||| %{smart_count} items atualizados",
      created: "Item criado",
      deleted: "Item apagado |||| %{smart_count} items apagados",
      bad_item: "Item incorreto",
      item_doesnt_exist: "Element does not exist",
      http_error: "Server communication error",
      data_provider_error: "dataProvider error. Check the console for details.",
      canceled: "Action cancelled",
      logged_out: "Your session has ended, please reconnect."
    },
    validation: {
      required: "Obrigatório",
      minLength: "Deve ter no mínimo %{min} caracteres",
      maxLength: "Deve ter no máximo %{max} caracteres",
      minValue: "Deve ser %{min} ou maior",
      maxValue: "Deve ser %{max} ou menor",
      number: "Deve ser um número",
      email: "Deve ser um email válido",
      oneOf: "Deve ser uma das seguintes opções: %{options}",
      regex: "Deve ter o formato específico (regexp): %{pattern}"
    }
  }
};
