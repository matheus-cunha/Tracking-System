import { Remain } from './remain-interface';
import { Spent } from './spent-interface';
import { Projects } from './projects-interface';

export const employees = [
    {
      name: 'Luiz',
      series: [
        {
          name: 'Total Horas',
          value: 200
        },
        {
          name: 'Horas Gastas',
          value: 170
        },
        {
          name: 'Horas Restantes',
          value: 30
        }
      ]
    },
    {
      name: 'Jair',
      series: [
        {
          name: 'Total Horas',
          value: 300
        },
        {
          name: 'Horas Gastas',
          value: 30
        },
        {
          name: 'Horas Restantes',
          value: 270
        }
      ]
    },
    {
      name: 'Amanda',
      series: [
        {
          name: 'Total Horas',
          value: 120
        },
        {
          name: 'Horas Gastas',
          value: 75
        },
        {
          name: 'Horas Restantes',
          value: 45
        }
      ]
    }
];

export const projects: Projects[] = [
  { // Projeto 1
    restante: {
      name: 'Restantes',
      value: 300
    },
    gastas: {
      name: 'Corridas',
      value: 50 }
  },

  { // Projeto 2
    restante: {
      name: 'Restantes',
      value: 150
    },
    gastas: {
      name: 'Corridas',
      value: 75 }
  },

  { // Projeto 3
    restante: {
      name: 'Restantes',
      value: 300
    },
    gastas: {
      name: 'Corridas',
      value: 450 }
  },

  { // Projeto 4
    restante: {
      name: 'Restantes',
      value: 250
    },
    gastas: {
      name: 'Corridas',
      value: 35 }
  }
];

export const spent: Spent[] = [
  { // Projeto 1
    restante: {
      name: 'Restante',
      value: 50
    },
    gastas: {
      name: 'Gastas',
      value: 30 }
  },

  { // Projeto 2
    restante: {
      name: 'Restante',
      value: 20
    },
    gastas: {
      name: 'Gastas',
      value: 90 }
  },

  { // Projeto 3
    restante: {
      name: 'Restante',
      value: 50
    },
    gastas: {
      name: 'Gastas',
      value: 60 }
  },

  { // Projeto 4
    restante: {
      name: 'Restante',
      value: 35
    },
    gastas: {
      name: 'Gastas',
      value: 45 }
  }
];

export const remain: Remain[] = [
  { // Projeto 1
    restante: {
      name: 'Restante',
      value: 20
    },
    gastas: {
      name: 'Gastas',
      value: 30 }
  },

  { // Projeto 2
    restante: {
      name: 'Restante',
      value: 60
    },
    gastas: {
      name: 'Gastas',
      value: 70 }
  },

  { // Projeto 3
    restante: {
      name: 'Restante',
      value: 30
    },
    gastas: {
      name: 'Gastas',
      value: 30 }
  },

  { // Projeto 4
    restante: {
      name: 'Restante',
      value: 15
    },
    gastas: {
      name: 'Gastas',
      value: 45 }
  }
];
