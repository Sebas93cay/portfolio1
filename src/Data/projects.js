import { OrderManagerDescription } from 'ui/components/OrderManagerDescription';

export const projectList = [
  {
    id: 'order_manager',
    thumbnail: 'order_manager.PNG',
    name: 'Order Manager',
    DescriptionComponent: OrderManagerDescription,
    descriptionComponentProps: {
      descriptionText:
        'Web app for for handling orders creation, deletion, shipping and searches for retail companies',
      frontUrl: 'https://github.com/Sebas93cay/Order_Manager_frontend',
      backUrl: 'https://github.com/Sebas93cay/Order_Manager_api',
    },
    deploymentUrl: 'https://Sebas93cay.github.io/Order_Manager_frontend',
  },
  {
    id: 'proyecto',
    thumbnail: 'proyecto.jpg',
    name: 'A Project',
    description:
      ' 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange',
  },
  {
    id: 'otro_proyecto',
    thumbnail: 'otro_proyecto.png',
    name: 'Another Project',
    description:
      ' 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange',
  },
];
