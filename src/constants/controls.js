import LabelIcon from '@material-ui/icons/Label';
export const CONTROLS = [
  {
    label: 'Button', name: 'button', isContainer: false,
    properties: [
      { label: 'name', name: 'name', type: 'text', required: false,value:'' },
      { label: 'id', name: 'id', type: 'text', required: false, value: '' },
      { label: 'className', name: 'className', type: 'text', required: false, value: '' },
      { label: 'title', name: 'title', type: 'text', required: true, value: '' },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false, value: '' },
      {
        label: 'type', name: 'type', type: 'dropdown', required: false, value: '',
        options: [{ label: 'button', value: 'button' }, { label: 'submit', value: 'submit' }, { label: 'reset', value: 'reset' }]
      },
      {
        label: 'disabled', name: 'disabled', type: 'dropdown', required: false, value: '',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      },
      {
        label: 'autoFocus', name: 'autoFocus', type: 'dropdown', required: false, value: '',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    ]
  },
  {
    label: 'Label', name: 'label', isContainer: false,
    properties: [
      { label: 'for', name: 'for', type: 'text', required: false, value: '' },
      { label: 'className', name: 'className', type: 'text', required: false, value: '' },
      { label: 'title', name: 'title', type: 'text', required: true, value: '' },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false, value: '' },
    ]
  },
  {
    label: 'Input', name: 'input', isContainer: false,
    properties: [
      { label: 'name', name: 'name', type: 'text', required: false, value: '' },
      { label: 'id', name: 'id', type: 'text', required: false, value: '' },
      { label: 'className', name: 'className', type: 'text', required: false, value: '' },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false, value: '' },
      {
        label: 'type', name: 'type', type: 'dropdown', required: false, value: '',
        options: [{ label: 'text', value: 'text' }, { label: 'number', value: 'number' },
        { label: 'date', value: 'date' }, { label: 'file', value: 'file' },
        { label: 'radio', value: 'radio' }, { label: 'checkbox', value: 'checkbox' }]
      },
      {
        label: 'disabled', name: 'disabled', type: 'dropdown', required: false, value: '',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      },
      {
        label: 'autoFocus', name: 'autoFocus', type: 'dropdown', required: false, value: '',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    ]
  },
  {
    label: 'Textarea', name: 'textarea', isContainer: false,
    properties: [
      { label: 'name', name: 'name', type: 'text', required: false, value: '' },
      { label: 'id', name: 'id', type: 'text', required: false, value: '' },
      { label: 'className', name: 'className', type: 'text', required: false, value: '' },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false, value: '' },
      {
        label: 'disabled', name: 'disabled', type: 'dropdown', required: false, value: '',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      },
      {
        label: 'autoFocus', name: 'autoFocus', type: 'dropdown', required: false, value: '',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    ]
  },
  {
    label: 'Div', name: 'div', isContainer: true,
    properties: [
      { label: 'className', name: 'className', type: 'text', required: false, value: '' },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false, value: '' }
    ]
  }
]