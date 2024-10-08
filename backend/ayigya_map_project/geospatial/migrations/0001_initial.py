# Generated by Django 5.1.1 on 2024-09-30 19:30

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Building',
            fields=[
                ('gid', models.AutoField(primary_key=True, serialize=False)),
                ('shape_are', models.DecimalField(blank=True, db_column='shape__are', decimal_places=50, max_digits=100, null=True)),
                ('shape_len', models.DecimalField(blank=True, db_column='shape__len', decimal_places=50, max_digits=100, null=True)),
                ('globalid', models.CharField(blank=True, max_length=38, null=True)),
                ('creationda', models.DateField(blank=True, null=True)),
                ('creator', models.CharField(blank=True, max_length=128, null=True)),
                ('editdate', models.DateField(blank=True, null=True)),
                ('editor', models.CharField(blank=True, max_length=128, null=True)),
                ('num_storey', models.FloatField(blank=True, null=True)),
                ('building_t', models.CharField(blank=True, max_length=254, null=True)),
                ('ghanapost_field', models.CharField(blank=True, db_column='ghanapost_', max_length=254, null=True)),
                ('plot_numbe', models.CharField(blank=True, max_length=254, null=True)),
                ('developmen', models.CharField(blank=True, max_length=254, null=True)),
                ('name', models.CharField(blank=True, max_length=254, null=True)),
                ('parcel_id', models.CharField(blank=True, max_length=254, null=True)),
                ('exact_use', models.CharField(blank=True, max_length=254, null=True)),
                ('building_u', models.CharField(blank=True, max_length=254, null=True)),
                ('mixed_use', models.CharField(blank=True, max_length=254, null=True)),
                ('remarks', models.CharField(blank=True, max_length=254, null=True)),
                ('other_info', models.CharField(blank=True, max_length=254, null=True)),
                ('other_in_1', models.CharField(blank=True, max_length=254, null=True)),
                ('geom', django.contrib.gis.db.models.fields.MultiPolygonField(blank=True, dim=4, null=True, srid=3857)),
            ],
            options={
                'db_table': 'building',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='DrainagGutter',
            fields=[
                ('gid', models.AutoField(primary_key=True, serialize=False)),
                ('shape_len', models.DecimalField(blank=True, db_column='shape__len', decimal_places=50, max_digits=100, null=True)),
                ('globalid', models.CharField(blank=True, max_length=38, null=True)),
                ('creationda', models.DateField(blank=True, null=True)),
                ('creator', models.CharField(blank=True, max_length=128, null=True)),
                ('editdate', models.DateField(blank=True, null=True)),
                ('editor', models.CharField(blank=True, max_length=128, null=True)),
                ('remarks', models.CharField(blank=True, max_length=254, null=True)),
                ('other_info', models.CharField(blank=True, max_length=254, null=True)),
                ('other_in_1', models.CharField(blank=True, max_length=254, null=True)),
                ('condition', models.CharField(blank=True, max_length=254, null=True)),
                ('geom', django.contrib.gis.db.models.fields.MultiLineStringField(blank=True, dim=4, null=True, srid=3857)),
            ],
            options={
                'db_table': 'drainag_gutter',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='OtherLinearFeatures',
            fields=[
                ('gid', models.AutoField(primary_key=True, serialize=False)),
                ('shape_len', models.DecimalField(blank=True, db_column='shape__len', decimal_places=50, max_digits=100, null=True)),
                ('globalid', models.CharField(blank=True, max_length=38, null=True)),
                ('creationda', models.DateField(blank=True, null=True)),
                ('creator', models.CharField(blank=True, max_length=128, null=True)),
                ('editdate', models.DateField(blank=True, null=True)),
                ('editor', models.CharField(blank=True, max_length=128, null=True)),
                ('remarks', models.CharField(blank=True, max_length=254, null=True)),
                ('other_info', models.CharField(blank=True, max_length=254, null=True)),
                ('other_in_1', models.CharField(blank=True, max_length=254, null=True)),
                ('name', models.CharField(blank=True, max_length=254, null=True)),
                ('geom', django.contrib.gis.db.models.fields.MultiLineStringField(blank=True, dim=4, null=True, srid=3857)),
            ],
            options={
                'db_table': 'other_linear_features',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='OtherPolygonStructure',
            fields=[
                ('gid', models.AutoField(primary_key=True, serialize=False)),
                ('shape_are', models.DecimalField(blank=True, db_column='shape__are', decimal_places=50, max_digits=100, null=True)),
                ('shape_len', models.DecimalField(blank=True, db_column='shape__len', decimal_places=50, max_digits=100, null=True)),
                ('globalid', models.CharField(blank=True, max_length=38, null=True)),
                ('creationda', models.DateField(blank=True, null=True)),
                ('creator', models.CharField(blank=True, max_length=128, null=True)),
                ('editdate', models.DateField(blank=True, null=True)),
                ('editor', models.CharField(blank=True, max_length=128, null=True)),
                ('exact_use', models.CharField(blank=True, max_length=254, null=True)),
                ('usage1', models.CharField(blank=True, max_length=254, null=True)),
                ('developmen', models.CharField(blank=True, max_length=254, null=True)),
                ('structure_field', models.CharField(blank=True, db_column='structure_', max_length=254, null=True)),
                ('ghanapostg', models.CharField(blank=True, max_length=254, null=True)),
                ('street_nam', models.CharField(blank=True, max_length=254, null=True)),
                ('name', models.CharField(blank=True, max_length=254, null=True)),
                ('parcel_id', models.CharField(blank=True, max_length=254, null=True)),
                ('remarks', models.CharField(blank=True, max_length=254, null=True)),
                ('other_info', models.CharField(blank=True, max_length=254, null=True)),
                ('other_in_1', models.CharField(blank=True, max_length=254, null=True)),
                ('mixed_usag', models.CharField(blank=True, max_length=254, null=True)),
                ('geom', django.contrib.gis.db.models.fields.MultiPolygonField(blank=True, dim=4, null=True, srid=3857)),
            ],
            options={
                'db_table': 'other_polygon_structure',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='PointOfInterest',
            fields=[
                ('gid', models.AutoField(primary_key=True, serialize=False)),
                ('globalid', models.CharField(blank=True, max_length=38, null=True)),
                ('creationda', models.DateField(blank=True, null=True)),
                ('creator', models.CharField(blank=True, max_length=128, null=True)),
                ('editdate', models.DateField(blank=True, null=True)),
                ('editor', models.CharField(blank=True, max_length=128, null=True)),
                ('remarks', models.CharField(blank=True, max_length=254, null=True)),
                ('other_info', models.CharField(blank=True, max_length=254, null=True)),
                ('other_in_1', models.CharField(blank=True, max_length=254, null=True)),
                ('usage1', models.CharField(blank=True, max_length=254, null=True)),
                ('owner', models.CharField(blank=True, max_length=254, null=True)),
                ('name', models.CharField(blank=True, max_length=254, null=True)),
                ('geom', django.contrib.gis.db.models.fields.PointField(blank=True, dim=4, null=True, srid=3857)),
            ],
            options={
                'db_table': 'point_of_interest',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='River',
            fields=[
                ('gid', models.AutoField(primary_key=True, serialize=False)),
                ('shape_len', models.DecimalField(blank=True, db_column='shape__len', decimal_places=50, max_digits=100, null=True)),
                ('globalid', models.CharField(blank=True, max_length=38, null=True)),
                ('creationda', models.DateField(blank=True, null=True)),
                ('creator', models.CharField(blank=True, max_length=128, null=True)),
                ('editdate', models.DateField(blank=True, null=True)),
                ('editor', models.CharField(blank=True, max_length=128, null=True)),
                ('remarks', models.CharField(blank=True, max_length=254, null=True)),
                ('other_info', models.CharField(blank=True, max_length=254, null=True)),
                ('other_in_1', models.CharField(blank=True, max_length=254, null=True)),
                ('water_type', models.CharField(blank=True, max_length=254, null=True)),
                ('name', models.CharField(blank=True, max_length=254, null=True)),
                ('geom', django.contrib.gis.db.models.fields.MultiLineStringField(blank=True, dim=4, null=True, srid=3857)),
            ],
            options={
                'db_table': 'river',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Road',
            fields=[
                ('gid', models.AutoField(primary_key=True, serialize=False)),
                ('shape_len', models.DecimalField(blank=True, db_column='shape__len', decimal_places=50, max_digits=100, null=True)),
                ('globalid', models.CharField(blank=True, max_length=38, null=True)),
                ('creationda', models.DateField(blank=True, null=True)),
                ('creator', models.CharField(blank=True, max_length=128, null=True)),
                ('editdate', models.DateField(blank=True, null=True)),
                ('editor', models.CharField(blank=True, max_length=128, null=True)),
                ('remarks', models.CharField(blank=True, max_length=254, null=True)),
                ('other_info', models.CharField(blank=True, max_length=254, null=True)),
                ('other_in_1', models.CharField(blank=True, max_length=254, null=True)),
                ('surface_ty', models.CharField(blank=True, max_length=254, null=True)),
                ('name', models.CharField(blank=True, max_length=254, null=True)),
                ('drain', models.CharField(blank=True, max_length=254, null=True)),
                ('road_type', models.CharField(blank=True, max_length=254, null=True)),
                ('geom', django.contrib.gis.db.models.fields.MultiLineStringField(blank=True, dim=4, null=True, srid=3857)),
            ],
            options={
                'db_table': 'road',
                'managed': True,
            },
        ),
    ]
