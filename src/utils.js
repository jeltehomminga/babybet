export const profilePics = {
  matthy:
    " https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/1470316_662656793794055_1154346225_n.jpg?_nc_cat=109&_nc_oc=AQn1xkKIqfAiRBXyj7hPkQiOxMygb0i4wDNye5PkxjxwbyfW_CPMaPBNWGKxjrcX1IY&_nc_ht=scontent-amt2-1.xx&oh=171e03407bb1a597ec46603b90ec5965&oe=5E9D9455"
};

export const fathers = [
  {
    name: "Jelte",
    img:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/c1.0.320.320a/p320x320/72122444_10220448351268964_5910052046437875712_n.jpg?_nc_cat=110&_nc_oc=AQnfcKVy5Wg3T4z6BPbPnwgSKlc4JN2_Nq5cBRUvsQwVVHBytaxZPjPn_tbqnMDp8YQ&_nc_ht=scontent-amt2-1.xx&oh=a864455c4ea8363c705ba959c88c22a6&oe=5EAB00DD"
  },
  {
    name: "Matthy",
    img:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/1470316_662656793794055_1154346225_n.jpg?_nc_cat=109&_nc_oc=AQn1xkKIqfAiRBXyj7hPkQiOxMygb0i4wDNye5PkxjxwbyfW_CPMaPBNWGKxjrcX1IY&_nc_ht=scontent-amt2-1.xx&oh=171e03407bb1a597ec46603b90ec5965&oe=5E9D9455"
  },
  {
    name: "Harold",
    img:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/c1.0.320.320a/p320x320/60060331_2268066153255040_8696897724554936320_o.jpg?_nc_cat=108&_nc_oc=AQn2D37uquvfo3OfdCJb4C7VpX_SuVLmF0Xq-gpPv2Y7r6oeUcRgIOcR2urpYzc-lqc&_nc_ht=scontent-amt2-1.xx&oh=90f1fee31718265826b4778ca2a18e8f&oe=5E93F633"
  },
  {
    name: "Martijn",
    img:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p320x320/50528133_2092187707535589_3715361691333033984_n.jpg?_nc_cat=101&_nc_oc=AQmqVfzWXvU863RxeVfusyktc3Jt0vtmo6vhHXHDHJwstjHMUc3fzJmq0iLWY9g5nAY&_nc_ht=scontent-amt2-1.xx&oh=e25aa75460bd0f7f27bc6d6c9d95ae29&oe=5E9A0F96"
  }
];
export const mothers = [
  {
    name: "Dessy",
    img:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p320x320/40099478_10156096978708952_457556399484829696_n.jpg?_nc_cat=110&_nc_oc=AQkAjIQb3DfH4je2bnv-zHiIULHt1wsFcefIP01jaBZ1-_E4hap3-Ut50ysUc6gepGA&_nc_ht=scontent-amt2-1.xx&oh=d3bfc662cb4ed7759e8f360dea98e648&oe=5EAFB267"
  },
  {
    name: "Janneke",
    img:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p320x320/12670498_10153974984328211_1498577965683155604_n.jpg?_nc_cat=110&_nc_oc=AQkFXl9H0o1wpqRK9ZnLwSD3aOrjKyf7wRuZmBLi0ZpJO5kSv247MitgBozQNik5fXc&_nc_ht=scontent-amt2-1.xx&oh=926016e9f90b678b114f4bc1a5e52496&oe=5EA7E684"
  },
  {
    name: "Lianne",
    img:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p320x320/68986517_3033033273380362_5056353100797837312_o.jpg?_nc_cat=100&_nc_oc=AQky9vehPI2VuFR6rraYg9CDMhzFYKvlOkWMjXaNyBj1geWU2qw3p5Y4TvwB3LluKh0&_nc_ht=scontent-amt2-1.xx&oh=d857a46d7558120c6c51d8abd2339276&oe=5EA39E6B"
  },
  {
    name: "Lisanne",
    img:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/p320x320/50528133_2092187707535589_3715361691333033984_n.jpg?_nc_cat=101&_nc_oc=AQmqVfzWXvU863RxeVfusyktc3Jt0vtmo6vhHXHDHJwstjHMUc3fzJmq0iLWY9g5nAY&_nc_ht=scontent-amt2-1.xx&oh=e25aa75460bd0f7f27bc6d6c9d95ae29&oe=5E9A0F96"
  }
];

export const couples = fathers.map((father, i) => [father, mothers[i]])

export const parents = couples => couples.map((couple, index) => ({
  parentsId: index,
  parents: `${couple[0] + ' & ' + couple[1]}`,
  father: couple[0],
  mother: couple[1],
}))

// export const dueDates = [{id: 0, dueDate: 17-7-2019}, {id: 1, dueDate: }]

