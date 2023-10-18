import { ProgressIndicator } from '@dnb/eufemia';
import React from 'react';

export default function CenteredProgressIndicator(): JSX.Element {
  return (
    <div>
      <ProgressIndicator
        label="Loading..."
        label_direction="vertical"
        show_label
        size="large"
        type="circular"
      />
    </div>
  );
}
