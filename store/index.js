export const state = () => ({ 
  lastRegisteredName: null,
  lastRegisteredEmail: null
})

export const mutations = { 
  setLastRegisteredName(state, name) { 
    state.lastRegisteredName = name
  },
  setLastRegisteredEmail(state, email) { 
    state.lastRegisteredEmail = email
  }
}

export const actions = { 
  setLastRegisteredName({ commit }, name) { 
    commit('setLastRegisteredName', name)
  },
  setLastRegisteredEmail({ commit }, email) { 
    commit('setLastRegisteredEmail', email)
  }
}

export const getters = { 
  getLastRegisteredName: (state) => state.lastRegisteredName,
  getLastRegisteredEmail: (state) => state.lastRegisteredEmail
}