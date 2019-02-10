import React from 'react';
import Panel from '../panel';
import { Button, Card } from 'react-bootstrap';
import OptionalConfigForm from '../optionalConfigForm';

function ComputeTorderPanel(props) {
  return (
    <Panel
      panelKey={2}
      id="compute-torder-settings"
      header="Compute T-order Settings"
      togglePanel={props.togglePanel}
      currentPanel={props.currentPanel}
      openPanel={props.openPanel}>
      <Card.Text>Set your preferred settings when computing t-orders</Card.Text>

      <OptionalConfigForm
        preferredSettings={props.preferredSettings}
        handleInputChange={props.handleInputChange}
        handleCheckBoxChanged={props.handleCheckBoxChanged}
        optimizationMethod={props.optimizationMethod}
        candidatesBound={props.candidatesBound}
        numTrials={props.numTrials}
        weightBound={props.weightBound}
        hgMappingsOnly={props.hgMappingsOnly}
        displayArrows={props.displayArrows}
      />
      <Button
        variant="primary"
        className="torder-compute-btn"
        onClick={props.resetConfig}>
        <span>Reset to default</span>
      </Button>
      <Button
        variant="primary"
        className="torder-compute-btn"
        onClick={props.setPreferredConfig}>
        <span>Save</span>
      </Button>
    </Panel>
  );
}

export default ComputeTorderPanel;
