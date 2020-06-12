{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "node-watcher.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create unified labels for node-watcher components
*/}}
{{- define "node-watcher.common.matchLabels" -}}
app: {{ template "node-watcher.name" . }}
release: {{ .Release.Name }}
chain: {{ .Values.chainName }}
{{- end -}}

{{- define "node-watcher.common.metaLabels" -}}
chart: {{ .Chart.Name }}-{{ .Chart.Version }}
heritage: {{ .Release.Service }}
{{- end -}}

## Server
{{- define "node-watcher.server.labels" -}}
{{ include "node-watcher.server.matchLabels" . }}
{{ include "node-watcher.common.metaLabels" . }}
{{- end -}}

{{- define "node-watcher.server.matchLabels" -}}
{{ include "node-watcher.common.matchLabels" . }}
{{- end -}}

{{- define "node-watcher.server.selectorLabels" -}}
component: {{ .Values.server.name }}
{{- end -}}

## nodeWatcher
{{- define "node-watcher.nodeWatcher.labels" -}}
{{ include "node-watcher.nodeWatcher.matchLabels" . }}
{{ include "node-watcher.common.metaLabels" . }}
{{- end -}}

{{- define "node-watcher.nodeWatcher.matchLabels" -}}
component: {{ .Values.nodeWatcher.name }}
{{ include "node-watcher.common.matchLabels" . }}
{{- end -}}

{{- define "node-watcher.nodeWatcher.selectorLabels" -}}
component: {{ .Values.nodeWatcher.name }}
{{- end -}}

## Harvester
{{- define "node-watcher.harvester.labels" -}}
{{ include "node-watcher.harvester.matchLabels" . }}
{{ include "node-watcher.common.metaLabels" . }}
{{- end -}}

{{- define "node-watcher.harvester.matchLabels" -}}
component: {{ .Values.harvester.name }}
{{ include "node-watcher.common.matchLabels" . }}
{{- end -}}

{{- define "node-watcher.harvester.selectorLabels" -}}
component: {{ .Values.harvester.name }}
{{- end -}}


{{/*  
Config for Prisma
*/}}

{{- define "node-watcher.prisma-config" -}}
port: 4466
databases:
  {{ .Values.nodeWatcher.dbName }}:
    connector: postgres
    host: 127.0.0.1
    port: 5432
    user: {{ .Values.nodeWatcher.dbUser }}
    password: {{ .Values.nodeWatcher.dbPassword }}
    migrations: true
    connectionLimit: 5
    rawAccess: true
{{- end -}}
