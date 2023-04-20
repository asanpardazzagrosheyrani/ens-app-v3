import { useTranslation } from 'react-i18next'

import { Button, Dialog } from '@ensdomains/thorin'

import { CenteredTypography } from '../components/CenteredTypography'
import { ContentContainer } from '../components/ContentContainer'
import { StyledInnerDialog } from '../components/StyledInnerDialog'

type Props = {
  name: string
  onCancel?: () => void
}
export const MigrateRegistryView = ({ name, onCancel }: Props) => {
  const { t } = useTranslation('transactionFlow')
  return (
    <>
      <Dialog.Heading
        title={t('input.profileEditor.warningOverlay.migrateRegistry.title')}
        alert="error"
      />
      <StyledInnerDialog>
        <ContentContainer>
          <CenteredTypography>
            {t('input.profileEditor.warningOverlay.migrateRegistry.subtitle')}
          </CenteredTypography>
        </ContentContainer>
      </StyledInnerDialog>
      <Dialog.Footer
        leading={
          <Button
            colorStyle="accentSecondary"
            onClick={onCancel}
            data-testid="warning-overlay-secondary-action"
          >
            {t('action.cancel', { ns: 'common' })}
          </Button>
        }
        trailing={
          <Button
            as="a"
            href={`https://app.ens.domains/name/${name}`}
            target="_blank"
            data-testid="profile-editor-overlay-button"
          >
            {t('input.profileEditor.warningOverlay.migrateRegistry.action')}
          </Button>
        }
      />
    </>
  )
}
