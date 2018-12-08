"""empty message

Revision ID: df8376ab2977
Revises: 2bb4a8c9e03d
Create Date: 2018-12-08 15:10:11.131334

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'df8376ab2977'
down_revision = '2bb4a8c9e03d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('User', sa.Column('test', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('User', 'test')
    # ### end Alembic commands ###