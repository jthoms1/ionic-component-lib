import { IonAvatar, IonChip, IonIcon, IonLabel } from "@ionic/react";

import React from "react";

const Chip = props => {
  return (
    <>
      <h1>Chip</h1>
      <IonChip>
        <IonLabel>Default</IonLabel>
      </IonChip>

      <IonChip>
        <IonLabel color="secondary">Secondary Label</IonLabel>
      </IonChip>

      <IonChip color="secondary">
        <IonLabel color="dark">Secondary w/ Dark label</IonLabel>
      </IonChip>

      <IonChip>
        <IonIcon name="pin" />
        <IonLabel>Default</IonLabel>
      </IonChip>

      <IonChip>
        <IonIcon name="heart" color="dark" />
        <IonLabel>Default</IonLabel>
      </IonChip>

      <IonChip>
        <IonLabel>Button Chip</IonLabel>
        <IonIcon name="close-circle" />
      </IonChip>

      <IonChip>
        <IonIcon name="pin" color="primary" />
        <IonLabel>Icon Chip</IonLabel>
        <IonIcon name="close" />
      </IonChip>

      <IonChip>
        <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>Avatar Chip</IonLabel>
        <IonIcon name="close-circle" />
      </IonChip>
    </>
  );
};

export default Chip;
