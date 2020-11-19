import LabelIcon from '@material-ui/icons/Label';
export const CONTROLS = [
  {
    label: 'Button', name: 'Button', isContainer: false,
    properties: [
      { label: 'name', name: 'name', type: 'text', required: false },
      { label: 'id', name: 'id', type: 'text', required: false },
      { label: 'className', name: 'className', type: 'text', required: false },
      { label: 'title', name: 'title', type: 'text', required: true },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false },
      {
        label: 'type', name: 'type', type: 'dropdown', required: false,
        options: [{ label: 'button', value: 'button' }, { label: 'submit', value: 'submit' }, { label: 'reset', value: 'reset' }]
      },
      {
        label: 'disabled', name: 'disabled', type: 'dropdown', required: false,
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      },
      {
        label: 'autoFocus', name: 'autoFocus', type: 'dropdown', required: false,
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    ]
  },
  {
    label: 'Label', name: 'Label', isContainer: false,
    properties: [
      { label: 'for', name: 'for', type: 'text', required: false },
      { label: 'className', name: 'className', type: 'text', required: false },
      { label: 'title', name: 'title', type: 'text', required: true },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false },
    ]
  },
  {
    label: 'Input', name: 'Input', isContainer: false,
    properties: [
      { label: 'name', name: 'name', type: 'text', required: false },
      { label: 'id', name: 'id', type: 'text', required: false },
      { label: 'className', name: 'className', type: 'text', required: false },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false },
      {
        label: 'type', name: 'type', type: 'dropdown', required: false,
        options: [{ label: 'text', value: 'text' }, { label: 'number', value: 'number' },
        { label: 'date', value: 'date' }, { label: 'file', value: 'file' },
        { label: 'radio', value: 'radio' }, { label: 'checkbox', value: 'checkbox' }]
      },
      {
        label: 'disabled', name: 'disabled', type: 'dropdown', required: false,
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      },
      {
        label: 'autoFocus', name: 'autoFocus', type: 'dropdown', required: false,
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    ]
  },
  {
    label: 'Textarea', name: 'Textarea', isContainer: false,
    properties: [
      { label: 'name', name: 'name', type: 'text', required: false },
      { label: 'id', name: 'id', type: 'text', required: false },
      { label: 'className', name: 'className', type: 'text', required: false },
      { label: 'Custom Style', name: 'customStyle', type: 'text', required: false },
      {
        label: 'disabled', name: 'disabled', type: 'dropdown', required: false,
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      },
      {
        label: 'autoFocus', name: 'autoFocus', type: 'dropdown', required: false,
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }]
      }
    ]
  }
]