"""empty message

Revision ID: 2bb4a8c9e03d
Revises: 6b6aa97e1b29
Create Date: 2018-12-08 15:08:38.163647

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2bb4a8c9e03d'
down_revision = '6b6aa97e1b29'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('User', sa.Column('firstname', sa.String(), nullable=True))
    op.add_column('User', sa.Column('lastname', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('User', 'lastname')
    op.drop_column('User', 'firstname')
    # ### end Alembic commands ###
